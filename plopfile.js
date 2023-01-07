module.exports= (plop)=> {
    plop.setGenerator('test', {
        prompts: [
            {
                type: 'confirm',
                name: 'nuxt3',
                message: 'Do you want create nuxt3 template?'
            },
            {
                type: 'input',
                name: 'fileName',
                message: '请输入项目名称'
            },
        ],
        actions: function (data) {
            let actions = [];
            if (data.nuxt3) {
                actions.push({
                    type: 'addMany',
                    destination: data.fileName,
                    base: `templates/nuxt3`,
                    templateFiles: 'templates/nuxt3/**'
                });
            }
            return actions;
        }
    });
};
