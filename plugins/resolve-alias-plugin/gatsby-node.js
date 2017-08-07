exports.modifyWebpackConfig = ({ config, stage}, { alias }) =>{
    return config.merge({
        resolve: { alias }
    });
}