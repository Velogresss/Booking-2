import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/context';

function RegistrationForm() {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        avatar: '',
        real_name: '',
        nickname: '',
        email: '',
        phone: '',
        birthday: '',
        gender: '',
        citizenship: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const ValidateForm = () => {
        const newErrors = {};

        if (!/^[A-Z][a-z]{0,31}$/.test(formData.real_name)) {
            newErrors.real_name = "Ім'я повинно починатися з великої літери, мати не більше 32 символів і без пробілів.";
        }

        if (!/^[A-Za-z]{1,16}$/.test(formData.nickname)) {
            newErrors.nickname = "Нікнейм повинен містити до 16 латинських літер.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Неправильний формат електронної пошти.";
        }

        if (!/^\+\d{1,15}$/.test(formData.phone)) {
            newErrors.phone = "Телефон повинен починатися з '+' і містити лише цифри.";
        }

        if (!/^\d{2}[./]\d{2}[./]\d{4}$/.test(formData.birthday)) {
            newErrors.birthday = "Дата повинна бути у форматі DD.MM.YYYY або DD/MM/YYYY.";
        }

        if (formData.gender !== 'Ж' && formData.gender !== 'Ч') {
            newErrors.gender = "Стать повинна бути 'Ж' (жіноча) або 'Ч' (чоловіча).";
        }

        if (!formData.citizenship) {
            newErrors.citizenship = "Громадянство є обов'язковим полем.";
        }

        if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(formData.password)) {
            newErrors.password = "Пароль повинен бути не менше 8 символів, містити хоча б одну літеру і цифру.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAuth(true);
        if (ValidateForm()) {
            console.log('Форма відправлена', formData);
        } else {
            console.log('Є помилки у формі');
        }
        console.log(isAuth);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Avatar</label>
                <input type="file" name="avatar" onChange={handleChange} />
            </div>

            <div>
                <label>Ім'я</label>
                <input type="text" name="real_name" onChange={handleChange} />
                {errors.real_name && <span>{errors.real_name}</span>}
            </div>

            <div>
                <label>Нікнейм</label>
                <input type="text" name="nickname" onChange={handleChange} />
                {errors.nickname && <span>{errors.nickname}</span>}
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
                <label>Телефон</label>
                <input type="tel" name="phone" onChange={handleChange} />
                {errors.phone && <span>{errors.phone}</span>}
            </div>

            <div>
                <label>Дата народження</label>
                <input type="text" name="birthday" onChange={handleChange} />
                {errors.birthday && <span>{errors.birthday}</span>}
            </div>

            <div>
                <label>Стать</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Виберіть стать</option>
                    <option value="Ж">Жіноча</option>
                    <option value="Ч">Чоловіча</option>
                </select>
                {errors.gender && <span>{errors.gender}</span>}
            </div>

            <div>
                <label>Громадянство</label>
                <input type="text" name="citizenship" onChange={handleChange} />
                {errors.citizenship && <span>{errors.citizenship}</span>}
            </div>

            <div>
                <label>Пароль</label>
                <input type="password" name="password" onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <button type="submit">Зареєструватися</button>
        </form>
    );
}

export default RegistrationForm;