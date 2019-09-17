/**
 * Пример работы с отправкой формы
 * Метод serializeArray собирает данные с полей формы
 */
$(function() {
    var submitBtn = $("#question-btn");

    submitBtn.click(function() {
        var submitForm = $("#question-form");
        var formData = submitForm.serializeArray();

        $.ajax({
            url: $(this).parent('form').attr('action'),
            dataType: "json",
            data: formData,
            type: "post",
            success: function(result) {
                if (result.success == "Y") {
                    $(".faq-response").addClass("faq-success");
                    $(".faq-response").html("Ваш вопрос отправлен. После проверки он будет добавлен на эту страницу");
                    submitBtn.attr("disabled", true);
                    $("#formContainer").toggle("slow");
                }
                else {
                    $(".faq-response").addClass("faq-error");
                    $(".faq-response").html(result.error);
                }
                console.log(result);
            }
        });
    });
});