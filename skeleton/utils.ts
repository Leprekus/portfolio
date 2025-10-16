
export type Util = [{
    title: string,
    description: string,
    image_url: string,
    project_url: string,
}];
export interface UtilsContent {
    title: string,
    description: string,
    utils: Util,
};
export const utilsContent: UtilsContent = {
    title: 'Everyday Utilities',
    description: 'A simple way to access my everyday tools',
    utils: [ 
        {
            title: 'Rich Text Editor', 
            description: 'Useful when you need to write down something quick. And it\'s pretty.',
            image_url: 'https://quickwrite-9co7d9cqm-raul-rodriguezs-projects-0829844f.vercel.app/',
            project_url: 'https://www.test.com',
        }
    ]
}
