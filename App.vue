<template>
    <div class="container">
    	<h1>welcome come vue {{ msg }}</h1>
    	<my-menu></my-menu>
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
        'my-menu':{
        	template:`
        		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt delectus libero laborum magni provident modi, asperiores, rem aliquam recusandae? Illum maxime dicta recusandae perspiciatis harum quaerat dolorem ullam velit laboriosam.</p>
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
</style>