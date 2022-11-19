import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("İsim Zorunlu")
    .min(3, "En az 3 Karakter olmalıdır."),
  phoneNumber: Yup.string()
    .required("Telefon numarası gereklidir.")
    .min(10, "Telefon numarası en az 10 karakter olmalıdır."),
  email: Yup.string().required("Email gereklidir.").email("e-posta geçersiz."),
  persons: Yup.string().required("Referans Kişisi gereklidir."),
  date: Yup.string().required("Tarih gereklidir."),
}); 