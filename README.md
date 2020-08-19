# Udagram Kubernetes Project

## Install kind (local Kubernetes)

```
curl -Lo ./kind "https://kind.sigs.k8s.io/dl/v0.8.1/kind-$(uname)-amd64"
chmod +x ./kind
mv ./kind /usr/local/bin
```

## Create cluster and alias

sudo kind create cluster udacity-kubernetes-project
alias k='sudo kubectl --context kind-udacity-kubernetes'
k get nodes

## Create namespace and deploy the entire folder

```
boris@ubuntu20box:~/aug17/udacity-kubernetes-project$ k create ns udacity
namespace/udacity created

boris@ubuntu20box:~/aug17/udacity-kubernetes-project$ k -n udacity apply -f udacity-c3-deployment/k8s/
deployment.apps/backend-feed created
service/backend-feed created
deployment.apps/backend-user created
service/backend-user created
configmap/env-config created
deployment.apps/frontend created
service/frontend created
deployment.apps/reverseproxy created
service/reverseproxy created
```

## check status of resources in the udacity namespace

```
boris@ubuntu20box:~/aug17/udacity-kubernetes-project$ k get all -n udacity
NAME                                READY   STATUS    RESTARTS   AGE
pod/backend-feed-7d85646476-frd85   1/1     Running   0          3m
pod/backend-feed-7d85646476-mntxq   1/1     Running   0          7m29s
pod/backend-user-59f96498f9-hlsrn   1/1     Running   0          7m28s
pod/backend-user-59f96498f9-ppsgc   1/1     Running   0          2m29s
pod/frontend-7cf9b8c948-nwjtn       1/1     Running   0          7m27s
pod/frontend-7cf9b8c948-th49r       1/1     Running   0          112s
pod/reverseproxy-65f8c8bf9c-lsz6t   1/1     Running   0          92s
pod/reverseproxy-65f8c8bf9c-z9796   1/1     Running   0          7m27s

NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/backend-feed   ClusterIP   10.97.111.252   <none>        8080/TCP   7m28s
service/backend-user   ClusterIP   10.111.18.23    <none>        8080/TCP   7m28s
service/frontend       ClusterIP   10.106.55.134   <none>        8100/TCP   7m27s
service/reverseproxy   ClusterIP   10.108.180.25   <none>        8080/TCP   7m27s

NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/backend-feed   2/2     2            2           7m29s
deployment.apps/backend-user   2/2     2            2           7m28s
deployment.apps/frontend       2/2     2            2           7m27s
deployment.apps/reverseproxy   2/2     2            2           7m27s

NAME                                      DESIRED   CURRENT   READY   AGE
replicaset.apps/backend-feed-7d85646476   2         2         2       7m29s
replicaset.apps/backend-user-59f96498f9   2         2         2       7m28s
replicaset.apps/frontend-7cf9b8c948       2         2         2       7m27s
replicaset.apps/reverseproxy-65f8c8bf9c   2         2         2       7m27s
boris@ubuntu20box:~/aug17/udacity-kubernetes-project$
```
