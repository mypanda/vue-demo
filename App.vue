<template>
    <div class="container">
    	<h1>welcome come vue {{ msg }}</h1>
        <hr>
        <parent></parent>
        <hr>
        <fruit></fruit>
        <hr>
        <person></person>
        <hr>
        <food></food>
        <water></water>
        <hr>
        <h3>这里通过计算数据，computed,author返回this.$store.state.author得到author的数据 -- 这一块属于app根组件</h3>
        <p>{{author}}</p>
        <hr>
        <foot></foot>
        <hr>
        <toe></toe>
        <hr>
        <official></official>
        <hr>
    </div>
</template>
<script>
export default{
    data(){
        return {
            msg:'^_^'
        }
    },
    computed:{
        author(){
            return this.$store.state.author
        }
    },
    components:{
        'parent':{
        	template:`
                <h3>父组件传递数据给子组件</h3>
                <p>parent -- {{message}}</p>
                <child :msg="message"></child>
                <input type="text" v-model="message">
                <p>这里是父组件的input[type='text'],父组件数据改变，子组件得到更新</p>
            `,
            data(){
                return {
                    message:'父组件数据'
                }
            },
            components:{
                'child':{
                    props: {
                        msg:String
                    },
                    template:'<p>child -- {{msg}}</p>'
                }
            }
        },
        'fruit':{
            template:`
                <h3>子组件给父组件传递数据，fruit是父组件，apple是子组件</h3>
                <p>父组件fruit --- {{info}}</p>
                <apple @ev="show"></apple>
            `,
            data(){
                return {
                    info:''
                }
            },
            methods:{
                show(info){
                    this.info = info;
                }
            },
            components:{
                'apple':{
                    template:`
                        <p>子组件apple -- <button @click="send">发送</button></p>
                    `,
                    data(){
                        return {
                            info:"苹果数据,来自子组件，apple"
                        }
                    },
                    methods:{
                        send(){
                            this.$emit('ev',this.info);
                        }
                    }
                }
            }
        },
        'person':{
            template:`
                <h3>父子之间的事件，person是父组件，admin是子组件，button{get}是属于admin子组件的</h3>
                <admin @haha='show'></admin>
            `,
            methods:{
                show(){
                    alert('xixi');
                }
            },
            components:{
                'admin':{
                    template:`
                        <p>子组件admin -- <button @click='get'>get</button></p>
                    `,
                    methods:{
                        get(){
                            this.$emit('haha');
                        }
                    }
                }
            }
        },
        'food':{
            template:`
                <h3>food 和 water是兄弟组件，修改store数据，兄弟组件得到更新</h3>
                <p>food组件 -- 显示store的数据 -- 还有多少水 <strong>{{water}}</strong></p>
            `,
            computed:{
                water(){
                    return this.$store.state.water
                }
            },
        },
        'water':{
            data(){
                return {
                    waterYield:''
                }
            },
            methods:{
                addWater(){
                    this.$store.state.water = this.waterYield
                }
            },
            template:`
                <p>water组件 -- 修改数据，加水</p>
                <p><input type="text" v-model="waterYield" placeholder="添加的水量" /></p>
                <p><button @click="addWater">加水进去到store</button>water组件修改store的数据，兄弟组件food使用store的数据得到更新</p>
            `,
        },
        'foot':{
            template:`
                <h3>一开始想在foot组件直接获取呢，获取不到，以为这个组件没有注册，他还是属于app组件的</h3>
                <h3>那怎么在app根组件的子组件获取呢,用下面一个toe脚趾头组件获取</h3>
                <p>这是简单使用state的数据 -- 作者：{{author}}</p>
                <P>这里获取不到数据，因为foot是app的子组件</P>
            `
        },
        'toe':{
            computed:{
                author(){
                    return this.$store.state.author
                }
            },
            template:`
                <h3>toe属于app子组件，怎么获取store的数据</h3>
                <p>store.author获取来的数据 -- {{author}}</p>
            `
        },
        'official':{
            computed:{
                storeWater(){
                    return this.$store.state.water
                }
            },
            data(){
                return {
                    water:''
                }
            },
            methods:{
                newAddWater(){
                    //使用commit,newater是改变数据的事件
                    this.$store.commit('neWater',this.water)
                }
            },
            template:`
                <h3>官网推荐修改store的写法</h3>
                <p>{{storeWater}}</p>
                <p>
                    <input type="text" v-model="water" placeholder="加水量" />
                    <button @click="newAddWater">官网推荐的加水方法</button>
                </p>
            `
        }
    }
}
</script>
<style scope>
	.container{
		width: 960px;
		margin: 0 auto;
	}
    .color-gray{
        color:gray;
    }
</style>