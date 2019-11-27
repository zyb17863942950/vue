<style>
	.container{
		padding: 0;
		margin: 0;
	}
	.signup{
		width: 1280px;
		height: 655px;
		text-align: center;
		background-color: #F9F9F9;
		padding-top: 30px;
	}
	.signup_inp{
		width: 400px;
		height: 450px;
		background-color: white;
		border: 1px #F9F9F9 solid;
		float: left;
		margin-left: 440px;
		margin-top: 30px;
		padding: 20px;
	
	}
	.signup_logo{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-left: 620px;
	}
	.signup_logo img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.signup_mg{
		font-size: 20px;
		padding-top: 10px;
		text-align: center;
	}
	
	.signup_inp input{
		height: 35px;
	}
	
	.yzcode{
		width: 180px;
		float: left;
	}
	
	.signup_inp_btn{
		margin-top: 70px;
	}
	.signup_inp_btn button{
		width: 300px;
		height: 40px;
		font-size: 17px;
	}
	
	
</style>

<template>
	<div class="container">
		<div class="signup">
			<div class="signup_logo">
				<img src="../assets/img/logo.jpg" />
			</div>
			<div class="signup_mg">
				欢迎注册 MgSupplier
			</div>
			<div class="signup_inp">
				
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">用户名</div>
				<input type="text" class="form-control" /><br />
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">密码</div>
			    <input type="password" class="form-control" /><br />
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">确认密码</div>
				<input type="password" class="form-control" /><br />
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">验证码</div>
				<input type="text" class="form-control yzcode" />
				
				<div class="signup_inp_btn"> 
				  <button class="btn btn-success">注册 &nbsp;MgSupplier</button>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
</script>


