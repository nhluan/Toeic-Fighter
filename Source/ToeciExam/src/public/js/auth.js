function myFunction(options) {
  var x = document.getElementById(options);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function validator(options) {
  var selectorRules = {};
  // hamf thuc hien validate
  function validate(inputElement, rule) {
    // lấy đc value
    // test func
    var errorElement = inputElement.parentElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage;
    var rules = selectorRules[rule.selector];
    for (var i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.parentElement.classList.remove("valid");
      inputElement.parentElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.parentElement.classList.remove("invalid");
      inputElement.parentElement.parentElement.classList.add("valid");
    }
    return !errorMessage;
  }
  //Lấy element của form
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // xử lý khi submit

    formElement.onsubmit = function (check) {
      check.preventDefault();

      var isSuccess = true;

      // lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        // console.log(inputElement);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isSuccess = false;
        }
      });

      if (isSuccess) {
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          console.log(enableInputs.length)

          var formValues = Array.from(enableInputs).reduce(function (values, input) {
            values[input.name] = input.value;
            return values;
          }, {});
          var data
          data = JSON.stringify({ "username": formValues['username'], "password": formValues['password'] });

          // console.log(data)
          options.onSubmit(data);
        }
      }
    };
    // lặp qua mỗi rule và xử lý lắng nghe vd blur input
    options.rules.forEach(function (rule) {
      // Lưu lại cac rules
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElement = formElement.querySelector(rule.selector);
      // Xử lý trường hợp blur khỏi input
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        inputElement.oninput = function () {
          var errorElement =
            inputElement.parentElement.parentElement.querySelector(".form-message");
          errorElement.innerText = "";
          inputElement.parentElement.parentElement.classList.remove("invalid");
          inputElement.parentElement.parentElement.classList.remove("valid");
        };
      }
      // xử lý  user nhập vào input
    });
  }
}
validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : "Vui lòng nhập dữ liệu";
    },
  };
};
validator.isAccount = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^[a-zA-Z0-9]+$/;
      return regex.test(value)
        ? undefined
        : "Tên đăng ký không đúng vd: manhtu123";
    },
  };
};
validator.isPassword = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^(?=.*\d).{6,20}$/;
      return regex.test(value)
        ? undefined
        : "Phải chứa ít nhất một số và ký tự từ (6,20)";
    },
  };
};

validator.isConfirmed = function (selector, getConfirmValue) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : "Mật khẩu nhập lại không chính xác";
    },
  };
};
