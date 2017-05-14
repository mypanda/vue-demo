<template>
    <div class="container">
    	<h1>welcome come vue {{ msg }}</h1>
        <hr>
        <parent></parent>
        <hr>
        <fruit></fruit>
        <hr>
        <person></person>
    </div>
</template>
<script>
export default{
    data(){
        return {
            msg:'welcome vue ^)^'
        }
    },
    components:{
        'parent':{
        	template:`
                <p>parent -- {{message}}</p>
                <child :msg="message"></child>
                <input type="text" v-model="message">
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
            template:'<p>fruit --- {{info}}</p><apple @ev="show"></apple>',
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
                    template:'<button @click="send">发送</button>',
                    data(){
                        return {
                            info:"苹果数据"
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
            template:"<p>父子之间的事件</p><admin @haha='show'></admin>",
            methods:{
                show(){
                    alert('xixi');
                }
            },
            components:{
                'admin':{
                    template:"<button @click='get'>get</button>",
                    methods:{
                        get(){
                            this.$emit('haha');
                        }
                    }
                }
            }
        },
        'food':{
            template:'<p>food父组件 -- 传递给water组件</p>',
        },
        'water':{
            template:'<p>water父组件 -- 传递给food组件</p>',
        }
    }
}
</script>
<style scope>
	.container{
		width: 960px;
		margin: 0 auto;
	}
</style>