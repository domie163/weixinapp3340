const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot9g60o/",
            name: "springboot9g60o",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot9g60o/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "懒人美食帮小程序"
        } 
    }
}
export default base
