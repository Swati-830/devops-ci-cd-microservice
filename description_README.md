DevOps CI/CD Microservice — End-to-End Pipeline Project

This project is a real, production-style DevOps CI/CD setup built using:

Node.js Microservice

Docker Image Build

Docker Hub Push

Kubernetes Deployment

GitHub Actions CI Pipeline

This project proves real-world DevOps skills: containerization, CI automation, troubleshooting, and Kubernetes deployment.

📌 Project Description (Client-Friendly)

This microservice project shows how to build a complete CI/CD workflow for real applications.
It includes:

Backend Node.js API

Automated testing

Dockerized build

CI pipeline for Docker image push

Kubernetes deployment manifests

Health checks, probes, rollout strategy

End-to-end delivery workflow

This is a perfect template for companies who want:

✔ CI pipeline
✔ Docker image automation
✔ Reliable deploy process
✔ Kubernetes-ready microservice
✔ Simple infrastructure

📌 Key Features
1. Automated CI Pipeline

GitHub Actions automatically performs:

✔ Code checkout
✔ Node.js setup
✔ Install dependencies
✔ Run tests
✔ Build Docker image
✔ Push to Docker Hub
✔ Update Kubernetes deployment (optional)

2. Kubernetes Ready

Included:

deployment.yaml

service.yaml

Readiness + Liveness probes

Rolling deployment support

3. Fully Dockerized Application

Uses a two-stage Dockerfile:

✔ Stage 1 — Builder
✔ Stage 2 — Lightweight runtime image

4. Health Endpoints

helps monitoring:

/ → main API

/health → readiness + liveness

📌 Technologies Used

Node.js

Express.js

Docker / Docker Hub

Kubernetes

kubectl

GitHub Actions

YAML / CI Workflows

Linux / SSH

📌 CI/CD Pipeline File (GitHub Actions)

The pipeline runs when code is pushed to:

develop

main

Pipeline steps:

Checkout code

Install Node.js

Install dependencies

Run smoke tests

Login to Docker Hub

Build and push Docker image

Configure kubeconfig (optional)

Deploy to Kubernetes (optional)

📌 How to Run Locally
cd app
npm install
node server.js


Test:

node test/app.test.js

📌 Build Docker Image
docker build -t yourname/microservice:tag .


Push to Docker Hub:

docker push yourname/microservice:tag

📌 Kubernetes Deployment
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml


Check pods:

kubectl get pods -n dev-practice

📌 NodePort Service Verification

From any Kubernetes worker node:

curl http://NODE_IP:NODEPORT/
curl http://NODE_IP:NODEPORT/health

📌 Major Issues I Faced & How I Fixed Them (Shows Real Experience)

Clients LOVE this section because it proves you can solve real DevOps problems.

1. Docker Daemon Not Running (Mac Issue)

Error:

Cannot connect to the Docker daemon


Fix:
Started Docker Desktop manually.

2. Namespace Missing in Kubernetes

Error:

namespaces "dev-practice" not found


Fix:
Created namespace:

kubectl create namespace dev-practice

3. NodePort Not Accessible

I tested access using worker node IPs and NodePort
→ Successful response confirmed service was working.

4. Port-Forward Already In Use

Error:

address already in use


Fix:
Found the running process and killed it:

ps -eaf | grep 8080
kill -9 <PID>

5. Git Conflicts (Rebase Errors)

I faced:

merge conflicts

divergent branches

force push issues

Fixes used:

git rebase --abort
git pull --rebase
git add <file>
git rebase --continue
git push --force


This shows real Git expertise.

6. Jenkins Deployment Failed

I attempted Jenkins deployment to cluster,
but due to company restrictions, ports already in use, etc.,
I removed Jenkins and switched to GitHub Actions only — which is the correct approach.

This shows decision-making & practical experience.

📌 Why This Project Is Good for Freelancing

Clients want a DevOps engineer who can:

✔ Build Docker images
✔ Create CI pipelines
✔ Debug failures
✔ Deploy to Kubernetes
✔ Automate workflows
✔ Handle real errors

This project demonstrates EXACTLY that.

You can reuse this template for any client microservice.

📌 What You Deliver to Clients

If you use this for freelancing, your offer becomes:

✔ Create CI/CD pipeline
✔ Build & Push Docker images
✔ Kubernetes deployment setup
✔ Health-check & rollout strategies
✔ Troubleshooting & monitoring
✔ Documentation (README + guide)

This is HIGH-VALUE work.

📌 How Reviewer Can Check Pipeline Works

Go to GitHub → Actions

Select latest workflow

Confirm green checkmarks:

Build complete

Tests passed

Docker image pushed

Check Docker Hub for new tag

This is enough proof for your CI abilities.
