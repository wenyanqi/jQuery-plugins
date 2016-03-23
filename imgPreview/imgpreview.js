function setImagePreview(avalue) {
	var docObj = document.getElementsByTagName('input')[0];

	var view = document.getElementById('view');

    var url = docObj.value;  //IE下测试通过


    //chrome下测试通过,IE下也可以
	var url = window.URL.createObjectURL(docObj.files[0]); 

	// console.log(docObj.files);
	// console.log(url);

	var imgElement = document.createElement("img");
	imgElement.setAttribute("src",url);
	view.appendChild(imgElement);

	//fileReader的形式
	var fr = new FileReader();
	fr.readAsDataURL(docObj.files[0]);
	fr.onload = function(evt) {
	    var imgElement = document.createElement("img");
	    imgElement.setAttribute("src",evt.target.result);
	    view.appendChild(imgElement);
	};
	
	//滤镜的形式,IE6-9
	
	if (view.filters && typeof(viewv.filters.item) === 'function'){
        view.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = docObj.value;
    }
	
	
}