# Đưa Ron Word Quest lên mạng bằng GitHub Pages (miễn phí)

App chỉ là 1 file `index.html`, nên GitHub Pages chạy được ngay, không cần server.

## Lần đầu (khoảng 5 phút)
1. Đăng nhập https://github.com → bấm **New repository**.
2. Đặt tên, ví dụ `ron-english`. Chọn **Public** (GitHub Pages miễn phí cần repo public). Bấm **Create repository**.
3. Trong repo mới, bấm **uploading an existing file** → kéo file `D:\app-hoc-tieng-anh\index.html` vào → bấm **Commit changes**.
4. Vào **Settings → Pages**. Ở mục *Build and deployment*: Source = **Deploy from a branch**, Branch = **main**, thư mục **/ (root)** → **Save**.
5. Đợi 1–2 phút, link sẽ là: `https://<tên-tài-khoản>.github.io/ron-english/`

## Trên máy tính bảng / điện thoại của Ron
- Mở link bằng Chrome (Android) hoặc Safari (iPhone/iPad).
- Chọn **Thêm vào màn hình chính** (Add to Home Screen) để có biểu tượng như một app.
- Luôn dùng cùng một máy và cùng một trình duyệt: tiến trình học và nhật ký thời gian được lưu trong trình duyệt của máy đó.

## Khi có bản cập nhật
- Vào repo → bấm vào `index.html` → biểu tượng ✏️ hoặc **Add file → Upload files** → tải file mới lên, cùng tên `index.html` → **Commit**. Tiến trình của Ron không bị mất.

## Lưu ý
- Link public: ai có link đều mở được app, nhưng không ai xem được tiến trình hay nhật ký của Ron (dữ liệu nằm trên máy của con).
- Phần "Claude viết bài đọc" (cho cấp Movers/Flyers) chỉ chạy trên bản Artifact của Claude. 60 bài Starters, game và nhật ký học đều chạy đầy đủ trên GitHub Pages.
- Muốn xem nhật ký học từ xa: dán URL webhook (n8n hoặc Google Apps Script) vào **Tiến bộ → Cài đặt → Gửi nhật ký về máy bố mẹ**. Mỗi buổi học xong, app gửi 1 dòng JSON: ngày, giờ bắt đầu, giờ kết thúc, thời gian học, thời gian kiểm tra, kết quả.
