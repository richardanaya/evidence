(function () {
  let Main = require('./components/main.jsx');
  let Simple = require('./components/simple.jsx');

  var routes =
    <ReactRouter.Route handler={Main}>
      <ReactRouter.Route path="/" handler={Simple}/>
    </ReactRouter.Route>

  ReactRouter.run(routes, ReactRouter.HashLocation, (Root) => {
    React.render(<Root />, document.body);
  });
})();
