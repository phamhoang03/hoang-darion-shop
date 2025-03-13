import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const InformationOrder = ({ DataCart, totalCart }) => {
  const [formData, setFormData] = useState({
    contact: "",
    firstName: "",
    lastName: "",
    phone: "",
    adress: "",
    country: "Vietnam",
    postalCode: "BDK562436",
    shipMethod: "Thu tiền qua Ship",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // Kiểm tra email
    if (!formData.contact) {
      newErrors.contact = "Email không được để trống!";
    } else if (!/\S+@\S+\.\S+/.test(formData.contact)) {
      newErrors.contact = "Email không hợp lệ!";
    }

    // Kiểm tra tên (chỉ chữ, không số)
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Họ không được để trống!";
    } else if (!/^[A-Za-zÀ-ỹ\s]+$/.test(formData.firstName)) {
      newErrors.firstName = "Họ chỉ được chứa chữ cái!";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Tên không được để trống!";
    } else if (!/^[A-Za-zÀ-ỹ\s]+$/.test(formData.lastName)) {
      newErrors.lastName = "Tên chỉ được chứa chữ cái!";
    }

    // Kiểm tra số điện thoại (chỉ số, 10-11 ký tự)
    if (!formData.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải có 10-11 chữ số!";
    }

    // Kiểm tra địa chỉ
    if (!formData.adress.trim()) {
      newErrors.adress = "Địa chỉ không được để trống!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Vui lòng kiểm tra lại thông tin!");
      return;
    }

    const orderDetails = DataCart.map((item) => {
      return `
        Tên đơn hàng: ${item.title}
        Giá: $${item.price} | Số lượng: ${item.quantity}
        Tổng tiền: $${(item.price * item.quantity).toFixed(2)}
        Tình trạng: ${item.availabilityStatus}
      `;
    }).join("\n");

    const templateParams = {
      to_email: formData.contact,
      customer_name: `${formData.firstName} ${formData.lastName}`,
      phone: `${formData.phone}, ${formData.country}`,
      adress: formData.adress,
      postal_code: formData.postalCode,
      shipping_method: formData.shipMethod,
      order_details: orderDetails,
      totalCart: totalCart,
    };

    emailjs
      .send(
        "service_gs4jej4",
        "template_6fqw84h",
        templateParams,
        "oD52fthgE3Bp1Kr0B"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast.success("Email xác nhận đã được gửi!");
      })
      .catch((error) => {
        console.error("Email send failed:", error);
        toast.error("Gửi email thất bại!");
      });
  };

  return (
    <div>
      <form onSubmit={sendEmail} className="space-y-6">
        <div className="w-full">
          <label className="font-semibold text-lg">Email</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
            placeholder="Email"
            required
          />
          {errors.contact && <p className="text-red-500">{errors.contact}</p>}
        </div>

        <div className="w-full">
          <label className="font-semibold text-lg">Shipping Information</label>

          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First name"
            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
            required
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName}</p>
          )}

          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last name"
            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
            required
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

          <input
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
            required
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}

          <input
            name="adress"
            type="text"
            value={formData.adress}
            onChange={handleInputChange}
            placeholder="Address"
            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
            required
          />
          {errors.adress && <p className="text-red-500">{errors.adress}</p>}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full uppercase h-[55px] bg-black text-white font-semibold text-sm px-4 rounded-lg hover:bg-white border hover:border-black hover:text-black transition-all"
            >
              Pay now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InformationOrder;
