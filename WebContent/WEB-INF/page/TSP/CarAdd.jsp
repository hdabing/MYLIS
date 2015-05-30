<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>修改信息</title>
    <link href="../../../css/common.css" rel="stylesheet" type="text/css" />
     <script type="text/javascript">
        function editLine() {
            alert("修改成功!");
            window.history.back();
        }
    </script>
</head>
<body>
    <div class="divMain">
        <div class="divDataList">
            <div class="modelTitle">运输线路修改</div>
            <table cellpadding="0" cellspacing="0" border="0" class="tabModel" width="100%">
                <tr>
	                <th class="tabModelTitle" colspan="2">线路基本信息</th>
	            </tr>
                <tr>
                    <td class="tabModelTip">路线编号:</td>
                    <td>line1</td>
                </tr>
                <tr>
                    <td class="tabModelTip">起点城市:</td>
                    <td>
                        <select id="Select1">
                            <option>重庆</option>
                            <option>北京</option>
                            <option>上海</option>
                        </select></td>
                </tr>
                <tr>
                    <td class="tabModelTip">详细地址:</td>
                    <td>
                        <input id="Text1" class="inputText" style="width:250px;" type="text" value="沙坪坝区**仓库" /></td>
                </tr>
                <tr>
                    <td class="tabModelTip">终点城市:</td>
                    <td>
                        <select id="Select3">
                            <option>重庆</option>
                            <option>北京</option>
                            <option>上海</option>
                        </select></td>
                </tr>
                <tr>
                    <td class="tabModelTip">详细地址:</td>
                    <td>
                        <input id="Text2" class="inputText" style="width:250px;" type="text" value="沙坪坝区**仓库" /></td>
                </tr>
                <tr>
                    <td class="tabModelTip">联系电话:</td>
                    <td><input id="Text3" class="inputText"  type="text" /></td>
                </tr>
                <tr>
                    <td class="tabModelTip">备注信息:</td>
                    <td>
                        <textarea id="TextArea1" name="textarea" cols="38" rows="2">详细信息</textarea></td>
                </tr>
            </table>
            <div  class="divBtn">
            <input id="subSave" class="btn" type="submit" value="保 存" onclick="editLine();" /> 
            <input id="reset" class="btn" type="reset" value="重 置" />
            <input id="btnBack" class="btn" type="button" value="返 回" onclick="location.href='LineList.html'" />
        </div>
        </div>
    </div>
</body>
</html>
