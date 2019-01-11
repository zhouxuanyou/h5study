//创建vm协调方法
class minVvm {
    //编写构造器
    constructor (opts){

        //把传入的参数放入this对象，方便后续访问
        this.el = opts.el;
        this.data = opts.data;

        //验证数据有效性
        if (this.el && this.data){
            //解析模板，合并数据生成新的html
            this.complier = new templateComplier(this.el,this.data)
        }

    }
}

//模板解析方法
class templateComplier{
    //编写构造器
    constructor(el,data){
        //接收传入的值挂着this上
        this.el = el?document.querySelector(el):null;//如果有dom对象就接收dom对象，否则就为空
        this.data = data;

        //再次验证数据的有效性，因为this点el可能为空
        if (this.el){
            //把dom放入内存
            let fragment = templateComplier.nodeTofragment(this.el);

            //执行模板解析，在内存解决不使用dom操作，把模板和数据合并生成html
            templateComplier.compile(fragment,data);

            //把解析结果放入页面
            this.el.appendChild(fragment);
        }
    }

    //dom节点放入内存的方法
    static nodeTofragment(node){
        //创建内存片段
        let fragment = document.createDocumentFragment();

        //循环节点放入内存
        while (node.firstChild){
            fragment.appendChild(node.firstChild);
        }

        return fragment;
    }

    //模板解析方法
    static compile(dom, data){
        //获取子节点
        let childnodes = dom.childNodes;

        //循环子节点
        childnodes.forEach(node=>{
            //获取节点类型
            let nodetype = node.nodeType;
            // console.log(nodetype);
            if (nodetype === 1){
                //1是元素节点，3是文本节点
                let attrs = [...node.attributes];

                attrs.forEach(attr=>{
                    //获取属性名
                    let attrname = attr.name;

                    //判断前缀是否为指令
                    if (attrname.indexOf('v-')===0){
                        let exp = attr.value;
                        //判断指令类型
                        if (attrname === 'v-text'){
                            node.textContent = data[exp];

                        } else if (attrname === 'v-model'){
                            node.value = data[exp];
                        }
                    }
                })
            }else if (nodetype === 3) {
                
            }
        })
    }
}