<style>
	.container{
		padding: 0;
		margin: 0;
	}
	.signin{
		width: 1280px;
		height: 655px;
		text-align: center;
		background-color: #F9F9F9;
		padding-top: 30px;
	}
	.signin_inp{
		width: 300px;
		height: 350px;
		background-color: white;
		border: 1px #F9F9F9 solid;
		float: left;
		margin-left: 490px;
		margin-top: 30px;
		padding: 20px;
	
	}
	.signin_logo{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-left: 620px;
	}
	.signin_logo img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.signin_mg{
		font-size: 20px;
		padding-top: 10px;
		text-align: center;
	}
	
	.signin_inp input{
		height: 35px;
	}
	.signin_inp_a{
		margin-top: 5px;
		margin-left: -195px;
	}
	.signin_inp_a a:hover{
		text-decoration: none;
	}
	.signin_inp_btn{
		margin-top: 30px;
	}
	.signin_inp_btn button{
		width: 250px;
		height: 40px;
		font-size: 17px;
	}
	
</style>

<template>
	
	<div class="container">
		<div class="signin">
			<div class="signin_logo">
				<img src="../assets/img/logo.jpg" />
			</div>
			<div class="signin_mg">
				欢迎登录 MgSupplier
			</div>
			<div class="signin_inp">
				
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">用户名</div>
				<input type="text" class="form-control" /><br />
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">密码</div>
			    <input type="password" class="form-control" />
				<div class="signin_inp_a"><a href="">忘记密码?</a></div>
				<div class="signin_inp_btn"> <button  class="btn btn-success">登录 &nbsp;MgSupplier</button></div>
				
			</div>
		</div>
	</div>
</template>

<script>
</script>


