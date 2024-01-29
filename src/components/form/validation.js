const validation = (formData) => {
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const phone_pattern = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  const phone_pattern_short = /^0\d{3}\d{3}\d{3}$/;

  if (formData.activity === "") {
    errors.activity = "Виберіть один з 2 варіантів!";
  }

  if (formData.name === "") {
    errors.name = "Ім'я обов'язкове!";
  }

  if (formData.email === "") {
    errors.email = "Поле з поштою не може бути пустим!";
  } else if (!email_pattern.test(formData.email)) {
    errors.email = "Формат пошти невірний!";
  }

  if (formData.phone === "") {
    errors.phone = "Поле з номером не може бути пустим!";
  } else if (
    !phone_pattern.test(formData.phone) &&
    !phone_pattern_short.test(formData.phone)
  ) {
    errors.phone = "Формат телефону невірний!";
  }

  return errors;
};

export default validation;
