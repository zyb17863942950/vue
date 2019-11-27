<style>
	.container{
		padding: 0;
		margin: 0;
	}
	.tool{
		width: 1280px;
		height: 50px;
		background-color: #24292E;
	}
	.logo{
		width: 130px;
		height: 35px;
		margin-left: 30px;
		margin-top: 8px;
		float: left;
	}
	.logo-img{
		width: 35px;
		height: 35px;
		border-radius: 50%;
		float: left;
	}
	
	.logo-img img{
		width: 35px;
		height: 35px;
		border-radius: 50%;
		
	}
	.logo-mgj{
		width: 95px;
		height: 35px;
		font-size: 15px;
		padding-top: 8px;
		color: white;
		float: left;
	}
	.about{
		width: 500px;
		height: 50px;
		float: left;
	}
	ul{
		list-style: none;
		padding-top: 15px;
	}
	ul>li{
		float: left;
		width: 100px;
	}
	.a{
		font-size: 15px;
		color: white;
	}
	.a:hover{
		text-decoration: none;
		color: darkgrey;
	}
	.login_signin{
		float: left;
		font-size: 15px;
		color: white;
		margin-left: 400px;
		margin-top: 15px;
	}
	.login_signup{
		float: left;
		font-size: 15px;
		color: white;
		margin-left: 40px;
		margin-top: 15px;
	}
	
	
	
	.bottom{
		width: 1280px;
		height: 605px;
		background-image: url(../assets/img/yu.jpg);
		background-size: 100%;
	}
	.inp{
		width: 350px;
		height: 420px;
		background-color: white;
		float: left;
		margin-left: 770px;
		margin-top: 50px;
		padding: 20px;

	}
	.inp input{
		height: 40px;
	}
	.inp_a{
		margin-top: 5px;
		margin-left: -245px;
	}
	.inp_a a:hover{
		text-decoration: none;
	}
	.inp_btn{
		margin-top: 50px;
	}
	.inp button{
		width: 300px;
		height: 50px;
		font-size: 17px;
	}
</style>

<template>
	<div class="container">
		<div class="tool">
			<div class="logo">
				<div class="logo-img">
					<img src="../assets/img/logo.jpg"/>
				</div>
				<div class="logo-mgj">
					<span>MgSupplier</span>
				</div>
			</div>
			<div class="about">
				<ul>
					<li><a class="a" href="">解决方案</a></li>
					<li><a class="a" href="">支持</a></li>
					<li><a class="a" href="">资源</a></li>
					<li><a class="a" href="">关于我们</a></li>
				</ul>
			</div>
			<div class="login_signin" @click="gosignin()">登录</div>
			<div class="login_signup" @click="gosignup()">注册</div>
		</div>
		<div class="bottom">
			<div class="inp">
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">用户名</div>
				<input type="text" class="form-control" /><br />
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">密码</div>
                <input type="password" class="form-control" />
				<div class="inp_a"><a href="">忘记密码?</a></div>
				<div class="inp_btn"> <button  class="btn btn-success" @click="goinfo()" >登录 &nbsp;MgSupplier</button></div>
				
			</div>
		</div>
	</div>
	
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			gosignin(){
				this.$router.push({"name":"signin"});
			},
			gosignup(){
				this.$router.push({"name":"signup"});
			},
			goinfo(){
				this.$router.push({"name":"storeinfo"});
		    },
		},
		mounted() {
			
		},
	}
	
</script>


