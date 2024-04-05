pipeline {
    agent { label 'local' }
    environment {
        IMAGE_NAME = 'max-product'
    }
    stages {
        stage('Build image') {
            steps {
                script {
                    def version = "0.${env.BUILD_NUMBER}.0"
                    sh "docker build -t ${env.IMAGE_NAME}:${version} -f Dockerfile ."
                    sh "docker tag ${env.IMAGE_NAME}:${version} ${env.IMAGE_NAME}:latest"
                }
            }
        }
        stage('Deploy container') {
            steps {
                script {
                    sh "docker stop todo-lists-${envName} || true && docker rm todo-lists-${envName} || true"
                    sh "docker run -d -p 4000:4000 --name todo-lists-${envName} -e NODE_ENV=${envName} ${env.IMAGE_NAME}:latest-${envName}"
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
            sh 'rm -rf tests/allure-results'
        }
    }
}