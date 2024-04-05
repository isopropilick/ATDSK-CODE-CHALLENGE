pipeline {
    agent { label 'local' }
    environment {
        IMAGE_NAME = 'max-product'
    }
    stages {
        stage('Build image') {
            steps {
                script {
                    sh "docker build -t max-product:0.${env.BUILD_NUMBER}.0 -f Dockerfile ."
                    sh "docker tag max-product:0.${env.BUILD_NUMBER}.0 max-product:latest"
                }
            }
        }
        stage('Deploy container') {
            steps {
                script {
                    sh "docker stop max-product || true && docker rm max-product || true"
                    sh "docker run -d -p 3000:3000 --name max-product -e max-product:latest"
                }
            }
        }
        stage('Unit testing') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run test'
                }
            }
        }
    }
    post {
        always {
            echo "cleanup"
        }
    }
}