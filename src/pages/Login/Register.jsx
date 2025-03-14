import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiLogin from "../../services/Apilogin";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "", // Xóa lỗi khi người dùng sửa nội dung
    });
  };

  const validateForm = () => {
    const { name, email, password, phone, address } = formRegister;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Họ và tên không được để trống!";
    }
    if (!email.trim()) {
      newErrors.email = "Email không được để trống!";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email không hợp lệ!";
    }
    if (!password.trim()) {
      newErrors.password = "Mật khẩu không được để trống!";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
    }
    if (!phone.trim()) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Số điện thoại phải là 10 chữ số!";
    }
    if (!address.trim()) {
      newErrors.address = "Địa chỉ không được để trống!";
    } else if (address.length < 4) {
      newErrors.address = "Địa chỉ phải có ít nhất 4 ký tự!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Kiểm tra nếu không có lỗi
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const res = await ApiLogin.register(formRegister);
      if (res.status === 201) {
        toast.success("Đăng ký thành công");
        navigate("/login");
      }
    } catch (error) {
      console.error("Lỗi API:", error.response?.data || error); // In lỗi chi tiết

      if (error.response && error.response.status === 422) {
        const apiErrors = error.response.data.errors; // API có thể trả về lỗi dạng object
        Object.keys(apiErrors).forEach((key) => {
          toast.error(apiErrors[key].join(", ")); // Hiển thị tất cả lỗi từ API
        });
      } else {
        toast.error("Đăng ký thất bại. Vui lòng thử lại!");
      }
    }
  };

  return (
    <>
      <section className="">
        <div className="pt-20">
          <h2 className="text-3xl font-semibold text-center">Register</h2>
          <div className="container">
            <div className="max-w-xl mx-auto">
              <div className="mt-5">
                <div>
                  <input
                    name="name"
                    type="name"
                    className="mt-3 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Name*"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    className="mt-3 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Email*"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="mt-3 relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="mt-2 w-full h-[50px] border border-gray px-4 pr-12 rounded-lg text-[14px]"
                    placeholder="Password*"
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                  <button
                    onClick={togglePasswordVisibility}
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </button>
                </div>
                <div>
                  <input
                    name="phone"
                    type="text"
                    className="mt-3 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Phone*"
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <input
                    name="address"
                    type="text"
                    className="mt-3 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Address*"
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleRegister}
                  className="w-full mt-5 mb-5 uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg-white border hover:border-black hover:text-black transition-all"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-12" />
    </>
  );
}

export default Register;
