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
		margin-top: 40px;
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
				
				<div style="float: left;">
					<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;float: left;">
						用户名
					</div>
					<div style="margin-left: 220px;float: left;">
					  <span :class="{'text-success':signname_sty,'text-danger':(!signname_sty)}">{{signname_tip}}</span>	
					</div>
				</div>
				<input @blur="signup_name()" v-model="signname" type="text" class="form-control" /><br />
				
				<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;">密码</div>
			    <input v-model="signpwd" type="password" class="form-control" /><br />
				
				<div style="float: left;">
					<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;float: left;">
						确认密码
					</div>
					<div style="margin-left: 180px;float: left;">
					  	<span style="color: red;">{{signpwd_tip}}</span>
					</div>
				</div>
				<input @blur="passwordConfirm()" v-model="password_confirm" type="password" class="form-control" /><br />
				
				
				<div style="float: left;width: 358px;">
					<div style="text-align: left;font-size: 13px;font-weight: 800;height: 30px;float: left;">
						验证码
					</div>
					<div style="margin-left: 100px;float: left;">
					    <span style="color: red;">{{code_tip}}</span>
					</div>
				</div>
				<input @blur="codeConfirm()" v-model="code" type="text" class="form-control yzcode" />
				
				<img id="keycode" @click="changeCode()" src="http://localhost:8086/mgj/vaildCode" style="width: 90px;height: 35px;"/>
				<div class="signup_inp_btn"> 
				    <button @click="toSignup()" class="btn btn-success">注册 &nbsp;MgSupplier</button>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				signname:"",
				signname_tip:"",
				signpwd:"",
				signpwd_tip:"",
				signname_sty:"",
				password_confirm:"",
				
				code:"",
				code_tip:"",
				
				readysignup:false,
			}
		},
		methods:{
			
			toSignup(){
				
				var ok=this.readySignup();
				if(ok){
					
					var ob=this;
					
					var url="http://localhost:8086/mgj/regeditcontroller/doregedit";
					$.ajax(url,{
						method:"get",
						data:{
							"signname":ob.signname,
							"signpwd":ob.signpwd,
							},
						xhrFields: {"withCredentials": true},
						success:function(result){
							
							
							alert("注册成功")
// 							if(result){
// 								if(window.confirm("是否立即登录？")){
// 									ob.$router.push({"name":"storeinfo"});
// 								    console.log("1");
// 								}else{
// 									ob.$router.back(-1);
// 									console.log("-1");
// 								}
// 							}
								 
								
						}
					})
				}else{
					alert("注册no")
				}
			},
			
			readySignup(){
				if(!this.signname_sty){
					return false;
				}if (this.signpwd!=this.password_confirm){
					return false;
				}if(this.code_tip!=""){
					return false;
				}
				this.readysignup=true;
				return this.readysignup;
			},
			
			codeConfirm(){
				var ob=this;
				
				var url="http://localhost:8086/mgj/regeditcontroller/validisok";
				$.ajax(url,{
					method:"get",
					data:{"keycode":ob.code},
					xhrFields: {"withCredentials": true},
					success:function(result){
						
						if(result){
							ob.code_tip=""
						}else{
							ob.code_tip="验证码不正确！";
							ob.changeCode();
						}
					}
				})
			},
			
			passwordConfirm(){
				if(this.signpwd==this.password_confirm){
					this.signpwd_tip="";
				}else {
					this.signpwd_tip="两次密码输入不同！";
				}	
			},
			
			signup_name(){
				var ob=this;
				
				var url="http://localhost:8086/mgj/regeditcontroller/lognameisok";
				$.ajax(url,{
					method:"get",
					data:{"stlogname":ob.signname},
					xhrFields: {"withCredentials": true},
					success:function(result){
						
						if(result){
							ob.signname_tip=""
							ob.signname_sty=true;
						}else{
							ob.signname_tip="此用户名已存在";
							ob.signname_sty=false;
						}
					}
				})
			},
			
			changeCode(){
				$("#keycode")[0].src="http://localhost:8086/mgj/vaildCode"
			},
		},
		mounted() {
			
		}
	}
</script>


