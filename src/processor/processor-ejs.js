var ejs = require('ejs');

/**
 * ejs 模板渲染
 *
 * @param {string} content 文本内容
 * @param {Object} attrs 属性
 * @param {string} attrs.data 数据项
 * @param {Object} scope 作用域
 * @param {Function} scope.execImport 导入数据
 */
module.exports = function processor(content, attrs, scope) {
  if (!content) {
    return content;
  }
  render = ejs.compile(content);
  var data;
  if (attrs.data) {
    data = JSON.parse(scope.execImport(attrs.data));
  } else {
    data = null;
  }
  return scope.compile(render(data));
};
