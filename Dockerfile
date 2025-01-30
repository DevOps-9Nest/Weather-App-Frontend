# Gunakan image Node.js versi LTS sebagai base image
FROM node:18

# Atur direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json (jika ada) ke dalam direktori kerja
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin sisa file aplikasi ke dalam direktori kerja
COPY . .

# Expose port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi menggunakan perintah yang ditentukan di package.json
CMD ["npm", "start"]
