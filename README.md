# COMPLETE README (VERY SIMPLE ENGLISH + ALL ISSUES YOU FACED + FULL PROJECT DESCRIPTION)


PROJECT DESCRIPTION (DETAILED + SIMPLE ENGLISH)

This project is a full DevOps CI/CD demonstration created step-by-step.

The goal of this project is to show how a real microservice is:
1. Developed  
2. Tested  
3. Containerized with Docker  
4. Stored in Docker Hub  
5. Manually deployed to Kubernetes  
6. Automatically built using GitHub Actions (CI)

You worked on:
- Linux terminal
- Node.js microservice
- Docker
- Docker Hub
- Kubernetes (Deployments, Services, Namespaces, Probes)
- GitHub version control
- Git conflicts and resolving
- GitHub Actions CI pipeline  
- Handling real DevOps errors in a company cluster environment

This project teaches a beginner:
✔ How to run a microservice  
✔ How to make a Dockerfile  
✔ How to build and push an image  
✔ How to deploy pods and services in Kubernetes  
✔ How to expose apps using NodePort  
✔ How to test pods and services using curl  
✔ How to fix real-world errors  
✔ How to make a working CI pipeline without Jenkins  

This README includes **every mistake, every error, every fix, every learning** so anyone can follow easily.


1. PROJECT STRUCTURE

devops-ci-cd-microservice/

app/
Node.js microservice source code

k8s/
Kubernetes Deployment and Service YAML files

Dockerfile
Docker image build instructions

.github/workflows/ci-cd.yml
GitHub Actions CI/CD pipeline



2. WHAT THIS PROJECT DOES


✔ Runs a Node.js app on port 3000  
✔ Provides 2 API endpoints:
    - `/` returns message  
    - `/health` used by Kubernetes probes  
✔ Docker image build + push  
✔ Manual Kubernetes deploy  
✔ GitHub Actions CI pipeline (build + push only)  



3. RUN APP LOCALLY


cd app
npm install
node server.js

Test:
curl http://localhost:3000/
curl http://localhost:3000/health


4. DOCKER BUILD + PUSH


docker build -t swati9455/devops-ci-cd-microservice:dev .
docker login
docker push swati9455/devops-ci-cd-microservice:dev


5. MANUAL KUBERNETES DEPLOY


# create namespace
kubectl create namespace dev-practice

# apply deployment and service
kubectl apply -f k8s/deployment.yaml -n dev-practice
kubectl apply -f k8s/service.yaml -n dev-practice

# check pods
kubectl get pods -n dev-practice

# check service
kubectl get svc -n dev-practice

# test
curl http://NODE_IP:NODE_PORT/
curl http://NODE_IP:NODE_PORT/health


6. GITHUB ACTIONS (CI ONLY)


Pipeline does:
✔ checkout code  
✔ setup Node.js  
✔ install dependencies  
✔ run smoke test  
✔ login to Docker Hub  
✔ build + push Docker image  

Deployment removed because cluster is private network.


7. EVERY ERROR YOU FACED + HOW WE FIXED IT



ERROR 1: "Cannot connect to Docker daemon"

Reason: Docker Desktop was not running on your mac.  
Fix: Built image on Ubuntu server.


ERROR 2: Kubernetes service not reachable

Reason: Needed NodePort and correct worker node IP.  
Fix: Tested with curl on worker nodes → working.


ERROR 3: Port-forward showing “Handling connection for 8080”

Reason: Normal log output from kubectl.  
Fix: Tested endpoints → working fine.


ERROR 4: "non-fast-forward" push failure

Reason: Remote branch ahead.  
Fix: git pull --rebase → resolve conflict → push.


ERROR 5: GitHub Actions Kubernetes deploy timeout

Reason: GitHub runners cannot access private-cluster IP (192.168.x.x).  
Fix: Removed Kubernetes deploy step from CI.  
Now CI works 100%.


ERROR 6: Wrong kubectl version

Fix: Set version: latest


ERROR 7: YAML indentation issues

Fix: Cleaned YAML properly (Deployment + Service).


ERROR 8: KUBECONFIG secret confusion

Reason: Even with correct KUBECONFIG, private cluster unreachable.  
Fix: Removed deploy step.


8. HOW TO DEPLOY NEW VERSION MANUALLY


After CI pushes new image:

IMAGE="swati9455/devops-ci-cd-microservice:<tag>"

kubectl -n dev-practice set image deployment/devops-microservice app=$IMAGE
kubectl -n dev-practice rollout status deployment/devops-microservice


9. WHAT IS WORKING NOW


✔ CI pipeline build & push  
✔ Manual Kubernetes deployment  
✔ NodePort service  
✔ Curl testing  
✔ Clean Git repository   
✔ Cluster running smoothly  


10. FUTURE IMPROVEMENT (OPTIONAL)


To enable automatic Kubernetes deploy, we can create:

OPTION A — GitHub Self-Hosted Runner  
OPTION B — Cloudflare Tunnel  
OPTION C — Expose API Server publicly 


# 📞 Contact & Work Availability


I can set up:
- CI/CD pipelines  
- Kubernetes deployments  
- Docker-based microservices  
- GitHub Actions workflows  
- Production-ready DevOps automation  

Feel free to contact me for DevOps work!
Gmail: swatijaiswal90090@gmail.com



END OF README

