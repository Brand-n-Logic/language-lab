$(function () {
    $('input[type=file]').change(function () {
        var fileInput = document.getElementById('fileItem');
        var files = fileInput.files;
        var fileURL = URL.createObjectURL(files[0]);
        document.querySelector('video').src = fileURL;
    });
});