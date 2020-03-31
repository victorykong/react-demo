/**
 * vscode 安装插件 Prettier - Code formatter
 * publisher:"Esben Petersen"
 *
 * docs: https://prettier.io/docs/en/options.html
 */
module.exports = {
    trailingComma: 'es5', // 多行时尽可能打印尾随逗号
    tabWidth: 4,
    semi: false, // 删除分号
    singleQuote: true,
    jsxSingleQuote: true, // jsx 使用单引号
    arrowParens: 'avoid', // 箭头函数单参数去掉括号
    insertPragma: false, // 顶部插入 format 标记
}
