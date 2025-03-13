// import { createSlice } from "@reduxjs/toolkit"
// import { toast } from "react-toastify";

// const initialState = {
//     userName: localStorage.getItem('useName'),
//     isLogin: !!localStorage.getItem('userName'),
// }

// const authenSlice = createSlice({
//     name:'authenSlice',
//     initialState,
//     reducers: {
//         doRegister: (state, action) => {
//             const { name, email, password, phone, address } = action.payload;
//             if (!email || !password) return state;
        
//             const users = JSON.parse(localStorage.getItem('users')) || [];
        
//             // Kiểm tra xem email đã tồn tại chưa
//             const isEmailExists = users.some(user => user.email === email);
//             if (isEmailExists) {
//                 alert("Email đã tồn tại, vui lòng dùng email khác!");
//                 return state;
//             }
        
//             // Thêm user mới vào danh sách
//             const newUser = { name, email, password, phone, address };
//             users.push(newUser);
        
//             // Lưu lại danh sách user mới vào localStorage
//             localStorage.setItem('users', JSON.stringify(users));
        
//             alert("Đăng ký thành công! Hãy đăng nhập.");
            
//             return state;
//         },
        

//         doLogin: (state, action) => {
//             const { email, password } = action.payload;
//             const users = JSON.parse(localStorage.getItem('users')) || [];
        
//             // Tìm user có email và password trùng khớp
//             const foundUser = users.find(user => user.email === email && user.password === password);
        
//             if (foundUser) {
//                 console.log('Đăng nhập thành công');
                
//                 // Cập nhật userName khi đăng nhập
//                 localStorage.setItem('userName', foundUser.name);
        
//                 return { ...state, userName: foundUser.name, isLogin: true };
//             }
            
//             alert("Sai tài khoản hoặc mật khẩu!");
//             return { ...state, userName: '', isLogin: false };
//         },
          

//         doLogout: (state) => {
//             localStorage.removeItem('useName')
//             toast.success('Thành công')
//             return {
//                 ...state,
//                 userName: '',
//                 isLogin: false
//             }
//         },
        

//     }
// })

// export const {doLogin, doLogout, doRegister} = authenSlice.actions;
// export default authenSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    isLogin: localStorage.getItem('userName') !== null && localStorage.getItem('userName') !== undefined && localStorage.getItem('userName') !== '',
};

export const authenSlice = createSlice({
    name: 'authenSlice',
    initialState,
    reducers: {
        // Action khi đăng nhập thành công
        doLogin: (state, action) => {
            const { email, access_token } = action.payload;

            if (access_token) {
                const userName = email.split('@')[0]; // Lấy tên người dùng từ email
                localStorage.setItem('userName', userName);
                localStorage.setItem('authToken', access_token); // Lưu token vào localStorage
                state.userName = userName;
                state.isLogin = true;
            } else {
                state.userName = '';
                state.isLogin = false;
            }
        },

        // Action khi đăng xuất
        doLogout: (state) => {
            localStorage.removeItem('userName');
            localStorage.removeItem('authToken');
            state.userName = '';
            state.isLogin = false;
        },
    },
});

export const { doLogin, doLogout } = authenSlice.actions;
export default authenSlice.reducer;
