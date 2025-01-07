const { Component } = require("react");
const { getDataSource } =require('./src/data-loader');

exports.createPages = async({actions})=>{
    const { createPage } = actions;
    const dataSource = await getDataSource();

    createPage({
        path:'/link',
        component: require.resolve('./src/templates/single-page.js'),
        context: { dataSource },
    });
    createPage({
        path:'/',
        component: require.resolve('./src/templates/photo-page.js'),
        context: { dataSource },
    });
    createPage({
        path:'/videos',
        component: require.resolve('./src/templates/video-page.js'),
        context: { dataSource },
    });
    createPage({
        path:'/location',
        component: require.resolve('./src/templates/single-page.js'),
        context: { dataSource },
    });

};
