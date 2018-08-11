# Belajar Web Server Node JS

## Langkah Pertama Untuk Create Project

Pertama buat folder dan lakukan npm init untuk folder tersebut, caranya yaitu:
- Pertama Buka terminal
- Selanjutnya Arahkan ke Folder yang tadi dibuat
- Terakhit Lakukan perintah berikut :

```bash
npm init
```

### Beberapa Hal Yang perlu diinstall

1. Express
```bash
npm install express@4.14.0 --save
```

2. hbs
```bash
npm install hbs@4.0.0 --save
```

## Set Up Heroku

1. Create Heroku Account [https://heroku.com/]

2. Download and install Heroku CLI [https://devcenter.heroku.com/articles/heroku-cli]
    - For Mac
    ```bash
    brew install heroku/brew/heroku
    ```

2. Login Heroku, Setelah itu lakukan login ke Heroku melalui terminal dengan perintah berikut :
    ```bash
    heroku login
    ```

    Setelah itu akan diminta untuk memasukkan Email dan Password Heroku, seperti berikut :
    ```bash
    $ heroku login
    Enter your Heroku credentials:
    Email: your.email@email.com
    Password: **************
    Logged in as mail.secondson@gmail.com
    ```

3. Selanjutnya Lakukan Set Up SSH. Jika belum pernah setup ssh silahkan lihat tutorial setup ssh yang disediakan oleh Github Atau Tutorial yang lainnya.

4. Setelah itu add ssh dilocal PC/Laptop ke Heroku dengan eksekusi perintah berikut di terminal :
    ```bash
    heroku keys:add
    ```

    Jika muncul di bawah ini pilih atau Masukkan Y :
    ```bash
    Found an SSH public key at /Users/muhammadyusuf/.ssh/id_rsa.pub
    ? Would you like to upload it to Heroku? (Y/n)
    ```

    Jika berhasil hasilnya akan seperti berikut :
    ```bash
    Found an SSH public key at /Users/muhammadyusuf/.ssh/id_rsa.pub
    ? Would you like to upload it to Heroku? Yes
    Uploading /Users/muhammadyusuf/.ssh/id_rsa.pub SSH key... done
    ```

4. Selanjutnya buat Repositori di Heroku dengan perintah berikut :
    ```bash
    heroku create
    ```

5. Dan push project ke heroku dengan perintah berikut :
    ```bash
    git push heroku
    ```
