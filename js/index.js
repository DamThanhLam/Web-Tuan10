// const errMa = '(*)BN-YYYYYY';
// const errMK = '(*)';
// const errNK = '(*)';

const maBenhNhan = document.getElementById('maBenhNhan');
const errMa = document.getElementById('errMa');
maBenhNhan.addEventListener('input', () => {
    console.log(/(^BN-\d{6}$)/.test(maBenhNhan.value));
    console.log(maBenhNhan.value);
    if (/^BN-\d{6}$/.test(maBenhNhan.value)) {
       errMa.style = 'display:none';
    } else {
        errMa.style = 'display:block';
    }
})
const matKhau = document.getElementById('matKhau');
const errMK = document.getElementById('errMK');
matKhau.addEventListener('input', () => {
    if (/.{6}/.test(matKhau.value)) {
        errMK.style = 'display:none';
    } else {
        errMK.style = 'display:block';
    }
})

const ngayKham = document.getElementById('ngayKham');
const errNK = document.getElementById('errNK');
ngayKham.addEventListener('change', () => {
    const dateInput = new Date(ngayKham.value);
    const dateNow = new Date();
    console.log(dateInput);
    if (dateNow < dateInput) {
        errNK.style = 'display:none';
    } else {
        errNK.style = 'display:block';
    }
})

document.getElementById('datLich').addEventListener('click', () => {
    const dateInput = new Date(ngayKham.value);
    const dateNow = new Date();
    if (dateNow < dateInput && /.{6}/.test(matKhau.value) && /^BN-\d{6}$/.test(maBenhNhan.value)){
        console.log('datLich');
        const table = document.getElementById('tableDatLich');
        const root = document.createElement('div');
        root.classList.add('col-12', 'col', 'row');
        const divSTT = document.createElement('div');
        try {
            const lastChild = table.lastElementChild;
            const firstChild = lastChild.firstChild;
            const stt = parseInt(firstChild.innerHTML);
            if (!isNaN(stt)) {
                divSTT.innerHTML = stt + 1;
            } else {
                divSTT.innerHTML = 1;
            }
        } catch {
            divSTT.innerHTML = 1;
            console.log(divSTT.innerHTML);
        }
        console.log(divSTT.innerHTML);
        const divMa = document.createElement('div');
        divMa.innerHTML = maBenhNhan.value;

        const divMK = document.createElement('div');
        divMK.innerHTML = matKhau.value;

        const divNK = document.createElement('div');
        divNK.innerHTML = ngayKham.value;

        // const divDV = document.createElement('div');
        var gia = 0;
        if (document.getElementById('khamBenh').checked) {
            // divDV.innerHTML = document.getElementById('khamBenh').nextSibling.textContent.trim() + '<br>';
            gia = document.getElementById('khamBenh').value * 1;
        }
        if (document.getElementById('dieuTri').checked) {
            // divDV.innerHTML += document.getElementById('dieuTri').nextSibling.textContent.trim()+ '<br>';
            gia += document.getElementById('dieuTri').value * 1;
        }
        if (document.getElementById('bacSi').checked) {
            // divDV.innerHTML += document.getElementById('bacSi').nextSibling.textContent.trim();
            gia += document.getElementById('bacSi').value * 1;
        }
        console.log(gia);
        // console.log(divDV.innerHTML);
        
        const divGia = document.createElement('div');
        divGia.innerHTML = gia;
        
        const selectElement = document.getElementById('chuyenKhoa');
        const selectedOption = selectElement.options[selectElement.selectedIndex];
    

        const divChuyenKhoa = document.createElement('div');
        divChuyenKhoa.innerHTML = selectedOption.innerHTML;

        divSTT.classList.add('col-1');
        divMa.classList.add('col-2');
        divMK.classList.add('col-2');
        divNK.classList.add('col-2');
        divGia.classList.add('col-2');
        divChuyenKhoa.classList.add('col-2');

        root.appendChild(divSTT);
        root.appendChild(divMa);
        root.appendChild(divMK);
        root.appendChild(divNK);
        root.appendChild(divGia);
        root.appendChild(divChuyenKhoa);
        table.appendChild(root);
        document.getElementById('close-modal').click();
    }
})
