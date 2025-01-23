1 instal angular 
   npm install -g @angular/cli
2 create components
   ng g c <components-name>
3 set path app.routes.ts look like below (basically define our component path )
     {
        path:'',
        component:DemoComponent,
        pathMatch:'full'
    },
    {
        path:'demo',
        component:DemoComponent
    },
4. Import router link in app.component.ts file "routerlink"
5 install bootstrap
   npm install bootstrap@5.3.3
6 set path in angular.json file two places 
   "./node_modules/bootstrap/dist/css/bootstrap.min.css"
7 if css is not working resolve this problem using this command
    npm i bootstrap --save
8 if you want to check bootstrap version and bootstrap install or not 
    npm list bootstrap
    9026590115
