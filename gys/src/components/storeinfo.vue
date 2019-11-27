<style>
  .div1{
    width: 1280px;
    height: 700px;
    background-color: greenyellow;
  }
  .div_l{
    width: 15%;
    height: 100%;
    background-color: red;
    float: left;
  }
 .div_r{
    width: 85%;
    height: 100%;
    background-color:#EEF3FA;
    float: left;

 }
 .div_l_logo{
   height: 15%;
   background-color: #354052;
   position: relative;
   border-bottom: 1px solid gray;
 }
 .div_l_body{
   height: 8%;
   background-color: #354052;
 }
 .div_l_bottom{
   height: 77%;
   background-color: #354052;
 }
 .div_l_logo img{
   position: absolute;
   width: 34px;
   height: 34px;
   left: 8%;
   top: 36%;
   border-radius: 50%;
}
.btn_1{
    position: relative;
    left: -10px;
    top: 15%;
  }
  .btn_1 span{
    color: whitesmoke;
  }

  .btn_1 a{
    color: #F8F8F8;
    text-decoration: none;
  }
 .div_l_bottom ul li a:hover{
   color: white;
   background-color: #337AB7;
 }
 .div_l_logo span{
   color: white;
   font-size: 19px;
   color: white;
   position: absolute;
   top: 40%;
   left: 33%;
   font-weight: bold;

 }
 .table thead tr th{
   text-align: center;
 }
 .table_1{
   width: 1000px;
   height: 550px;
   padding: 30px;
   position: relative;
 }
 .table_1 button{
   position: absolute;
   left: 20px;
 }
 .pagination li{
   width: 34px;
   height: 34px;
 }

</style>

<template>
  <div class="div1">
    111
    <div class="div_l">
      <div class="div_l_logo">
        <img src="../assets/img/logo.jpg" />

        <span>MgSupplier</span>
      </div>
      <div class="div_l_body">
         <div class="btn_1">
           <span>你好，.....</span>
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           <a href="">退出</a>
         </div>
      </div>
      <div class="div_l_bottom">
        <ul class="nav nav-pills nav-stacked">
          <li class="active"><a href="#">商品详情</a></li>
          <li><a href="#">SVN</a></li>
          <li ><a data-toggle="modal" data-target="#myModal">联系我们</a></li>
         </ul>
      </div>
    </div>
    <div class="div_r">

      <!-- 模态框（Modal） -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <h4 class="modal-title" id="myModalLabel">客服中心</h4>
                  </div>
                 <div class="modal-body">
                   邮箱：
                  <input type="text" />
                 </div>
                 <div class="modal-body">
                   微信：
                   <input type="text" />
                 </div>
                 <div class="modal-body">
                   电话：
                   <input type="text" />
                   </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                      <button type="button" class="btn btn-primary">提交更改</button>
                  </div>
              </div><!-- /.modal-content -->
          </div><!-- /.modal -->
      </div>

      <div class="table_1">
          <button @click="insert_store()" class="btn btn-warning">添加新商品</button>
          <hr />
          <table class="table table-striped">
            <thead>
              <tr>
                <th>商品编号</th>
                <th>商品名称</th>
                <th>商品地址</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tanmay</td>
                <td>Bangalore</td>
                <td>560001</td>
                <td>
                 <i class="fa fa-eye" aria-hidden="true"></i>
                  &nbsp;
                 <i class="fa fa-trash" aria-hidden="true"></i>
                </td>
              </tr>
         </tbody>
          </table>
      </div>

      <ul class="pagination">
          <li><a href="#">&laquo;</a></li>
          <li class="active"><a href="#">1</a></li>
          <li class="disabled"><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">&raquo;</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
      data:function(){
        return{


        };
      },
      mounted(){

      },
      methods:{
        insert_store(){
          this.$router.push({"name":"add_storeinfo"});
        },


      },



  }
</script>
