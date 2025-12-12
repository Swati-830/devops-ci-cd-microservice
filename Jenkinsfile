pipeline {
  agent any

  environment {
    DOCKER_REGISTRY = "${env.DOCKER_REGISTRY ?: 'docker.io'}"
    IMAGE = "${env.DOCKER_REGISTRY ?: 'docker.io'}/${env.DOCKER_USER ?: 'youruser'}/devops-ci-cd-microservice:${env.BUILD_TAG ?: 'dev'}"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install & Test') {
      steps {
        sh 'cd app && npm install'
        sh 'cd app && node server.js & sleep 1 && node test/app.test.js || true'
      }
    }

    stage('Build Image') {
      steps { sh 'docker build -t ${IMAGE} .' }
    }

    stage('Push Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-reg-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin ${env.DOCKER_REGISTRY}
            docker push ${IMAGE}
          '''
        }
      }
    }

    stage('Deploy to Kubernetes') {
      when { expression { return env.DEPLOY == 'true' } }
      steps {
        withCredentials([file(credentialsId: 'kubeconfig-cred', variable: 'KUBECONF')]) {
          sh 'export KUBECONFIG=$KUBECONF'
          sh "kubectl set image deployment/devops-microservice app=${IMAGE} --record || kubectl apply -f k8s/"
        }
      }
    }
  }
}
