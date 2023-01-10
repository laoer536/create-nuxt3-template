module.exports = (plop) => {
    plop.setGenerator('creat-nuxt-template', {
        description: 'This is a quick template program to create nuxt template.',
        prompts: [
            {
                type: 'confirm',
                name: 'nuxt3',
                message: 'Do you want create nuxt3 template?'
            },
            {
                type: 'input',
                name: 'fileName',
                message: 'Set project name',
                when: (res) => res.nuxt3
            },
        ],
        actions: function (data) {
            let actions = ['Start to create nuxt3 template...'];
            if (data.nuxt3) {
                actions.push({
                    type: 'addMany',
                    destination: data.fileName,
                    base: `templates/nuxt3`,
                    templateFiles: 'templates/nuxt3/**',
                    globOptions: { dot: true }
                }, async function customAction(answers) {
                    let successMsg = `The {{fileName}} project is created, now you can see it at ${process.cwd()}/{{fileName}}.`;
                    // you can use plop.renderString to render templates
                    return plop.renderString(successMsg, answers);
                }, 'You need to open this project according to the above path and execute "yarn"','Then execute "yarn dev" to run the project');
            }
            return actions;
        }
    });
};
