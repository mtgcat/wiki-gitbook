FROM node:13
  
LABEL Author=""

# 将 build 目录下的需要的文件都 copy 到 container（运行此镜像的容器）文件系统的app文件夹下
ADD dist /app/dist
ADD _book /app/_book
ADD ./package.json /app/

# cd到app文件夹下
WORKDIR /app

# 安装项目依赖包
RUN npm cache clean --force
RUN npm install --registry=https://registry.npm.taobao.org --production

# 容器对外暴露的端口号
EXPOSE 3000

# 容器启动时执行的命令
CMD ["node", "dist/index.js"]