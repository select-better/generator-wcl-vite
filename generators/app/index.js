const Generator = require('yeoman-generator');

module.exports = class extends Generator{
    prompting(){
        return this.prompt([
            {
                type:'input',
                name: 'name',
                default: this.appname,
                message: 'your project name'
            }
        ]).then(answers => {
            this.answers = answers
        })
    };
    write(){
        const files = [
            '.vscode/extensions.json',
            'public/favicon.ico',
            'src/main.ts',
            'src/env.d.ts',
            'src/App.vue',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            '.gitignore',
            'index.html',
            'package.json',
            'README.md',
            'tsconfig.json',
            'vite.config.ts',
        ]
        const context = this.answers
        files.forEach(item=>{
            this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), context)
        })
    }
}