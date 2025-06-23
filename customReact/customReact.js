function customRender(reactElement,mainContainer){
    /*
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)


    mainContainer.appendChild(domElement)*/

   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
    if(prop == reactElement.children) continue;
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   mainContainer.appendChild(domElement)
}

const reactElements ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'blank__'
    },
    children:'Click to google link '
}

const mainContainer = document.querySelector("#root")

customRender(reactElements , mainContainer)