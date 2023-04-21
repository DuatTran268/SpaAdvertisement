using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;

namespace SpaCenter.Data.Seeders
{
    public class DataSeeder : IDataSeeder
    {
        private readonly SpaDbContext _dbContext;

        public DataSeeder(SpaDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Initialize()
        {
            _dbContext.Database.EnsureCreated();

            if (_dbContext.Services.Any()) return;

            var services = AddServices();
            var typeservices = AddTypeServices();
            var users = AddUsers();
            var produces = AddProducts();
            var posts = AddPosts();
        }
        private IList<Service> AddServices()
        {
            var services = new List<Service>()
            {
                new()
                {
                    Name = "Dịch vụ mụn",
                    ImageUrl = "https://cdn.diemnhangroup.com/seoulspa/2022/11/tri-mun-chuyen-sau-6.jpg",
                    UrlSlug = "dich-vu-mun",
                    Description = "Dịch vụ Điều Trị Mụn Chuyên Sâu giúp bạn nhanh chóng lấy lại làn da sạch mụn, láng mịn, không để lại thâm sẹo, hạn chế tối đa việc mụn quay trở lại.",
                    Meta = "Mụn là nguyên nhân chính khiến nhiều anh chị em trở nên tự ti, đánh mất đi nhiều cơ hội trong công việc và cuộc sống"
                },
                new()
                {
                    Name = "Dịch vụ Da",
                    ImageUrl = "https://gaspa.vn/wp-content/uploads/2021/10/z3037166978558_7371ac06fd8ffb31f09d80d8b12b5f65_1.jpg",
                    UrlSlug = "dich-vu-da",
                    Description = "Các dịch vụ chăm sóc da",
                    Meta = "Giúp lấy lại làn da sạch đẹp không tì vết"
                },
                new()
                {
                    Name = "Tắm trắng",
                    ImageUrl = "https://cdn.diemnhangroup.com/seoulspa/2023/03/tam-trang-4-1536x1024.jpeg",
                    UrlSlug = "dich-vu-da",
                    Description = "Với ưu điểm không lột tẩy, không hóa chất độc hại, không bào mòn, đặc biệt làm da mịn màng, sáng bật tone, phương pháp tắm trắng phi thuyền",
                    Meta = "Giúp làn da trắng khỏe mịn"
                },
                new()
                {
                    Name = "Phun xăm",
                    Sale = 65,
                    ImageUrl = "https://cdn.diemnhangroup.com/seoulspa/2023/03/tam-trang-4-1536x1024.jpeg",
                    UrlSlug = "dich-vu-phun-xam",
                    Description = "Địa chỉ Spa dẫn đầu trong công nghệ Phun môi thẩm mỹ. Với các phương pháp phun môi hiện đại được được đông đảo khách hàng ưa chuộng",
                    Meta = "Giúp làn da trắng khỏe mịn"
                },
                new()
                {
                    Name = "Triệt lông",
                    ImageUrl = "https://vienthammydiva.vn/wp-content/uploads/2020/09/triet-long-chan-5.jpg",
                    UrlSlug = "dich-vu-triet-long",
                    Description = "Triệt lông vĩnh viễn bằng công nghệ cao sẽ giúp bạn loại bỏ những sợi vi ô lông mất thẩm mỹ và trả lại làn da trắng sáng, láng mịn hơn.",
                    Meta = "Triệt lông vĩnh viễn"
                },
            };

            _dbContext.Services.AddRange(services);
            _dbContext.SaveChanges();

            return services;
        }

        private IList<TypeService> AddTypeServices()
        {
            var types = new List<TypeService>()
            {
                new() {Name = "Nặn mụn", UrlSlug = "nan-mun",Price = 200000,Description = "Nặn mụn trứng cá, những cái mụn db", Status = true },
                new() {Name = "Lấy nhân mụn", UrlSlug = "loai-bo-nhan-mun",Description = "Lấy sạch nhân mụn sau khi nặn", Status = true },
                new() {Name = "Mụn thâm", UrlSlug = "mun-tham",Description = "Trị thâm mụn do tự nặn", Status = true },
                new() {Name = "Làm trắng da", UrlSlug = "lam-trang-da",Description = "Làm trắng da bằng công nghệ cao", Price = 480000, Status = true },
                new() {Name = "Trị da liễu", UrlSlug = "tri-da-lieu",Description = "Trị các bệnh về da liễu", Status = true },
                new() {Name = "Da lão hoá", UrlSlug = "da-lao-hoa",Description = "Chữa vấn đề do da bị thời gian lão hoá", Status = true },
                new() {Name = "Tắm trắng phi thuyền", UrlSlug = "tam-trang-phi-thuyen", Price = 950000, Description = "Tắm trắng giúp khắc phục tình trạng da sạm màu, ngâm đen, tối màu của da", Status = true },
                new() {Name = "Phun môi thẩm mỹ", UrlSlug = "dich-vu-phun-moi", Price = 6500000, Description = "Phun môi là kỹ thuật sử dụng các bút thêu chuyên biệt gắn các đầu kim siêu nhỏ, tác động lên vùng môi và tạo màu ấn tượng", Status = true },
                new() {Name = "Triệt cả lông chân và tay vĩnh viễn", UrlSlug = "triet-long-tay-chan", Price = 3300000,Description = "Các bước triệt lông đều đảm bảo theo tiêu chuẩn Y khoa và đáp ứng đủ các tiêu chí về vô trùng, vô khuẩn.", Status = true },
            };

            _dbContext.Types.AddRange(types);
            _dbContext.SaveChanges();

            return types;
        }
        private IList<Product> AddProducts()
        {
            var products = new List<Product>()
            {
                new()
                {
                    Name = "Kem trị mụn, tái tạo da và tăng sinh collagen Tretinoin Cream 0,05%",
                    Price = 690000,
                    ImageUrl = "https://cdn.diemnhangroup.com/seoulspa/2022/09/tretinoin-cream-thumbnail.png",
                    UrlSlug = "kem-tri-mun-tai-tao-da-tretinoin-cream-005",
                    Description = "Thâm nám là một trong những tác nhân lấy đi độ tự tin của nhiều phái đẹp. Tretinoin Cream 0,05% không chỉ giúp đánh bay tình trạng thâm nám mà còn giúp da trở nên mềm mịn và khỏe mạnh hơn.",
                    Buyed = 5,
                    Meta = "Giảm thâm nám - Tretinoin Cream 0,05%",
                    Status = true
                },
                new()
                {
                    Name = "Mặt nạ dưỡng da Innoblanc- Guaiazulene Ampoule Mask Pack (28ml)",
                    Price = 1360000,
                    ImageUrl = "https://cdn.diemnhangroup.com/seoulspa/2022/09/PpBhf1Ng-innoblanc-guaiazulene-ampoule-mask-pack-2-510x510.jpg",
                    UrlSlug = "mat-na-innoblanc",
                    Description = "Thường xuyên sử dụng mặt nạ Innoblanc- Guaiazulene Ampoule là giải pháp hữu hiệu trong chăm sóc và nuôi dưỡng làn da mịn màng, ngậm nước và luôn tươi tắn, rạng ngời mỗi ngày.",
                    Buyed = 6,
                    Meta = "Mặt nạ Innoblanc- Guaiazulene Ampoule",
                    Status = true
                },
                new()
                {
                    Name = "Kem Chống Nắng Sunflower SPF 50+ PA++++ 30g",
                    Price = 388000,
                    ImageUrl = "https://gaspa.vn/wp-content/uploads/2022/06/KCN-scaled.jpeg",
                    UrlSlug = "kem-chong-nang-sunflower-spf-50-pa-30g",
                    Description = "KEM CHỐNG NẮNG EFFCTIVE SUNCREEN SPF 50/PA+++ là sản phẩm kem chống nắng đến từ thương hiệu C13 Beauty, giúp chống lại tác hại của tia UV & bụi mịn tối ưu dưới mọi điều kiện sinh hoạt, kể cả thời tiết khắc nghiệt nhất. Sản phẩm đặc biệt phù hợp với mọi loại da.",
                    Buyed = 23,
                    Meta = "Kem Chống Nắng Sunflower SPF 50+ PA++++ (Tuýp 30g)",
                    Status = true
                },
                new()
                {
                    Name = "VIÊN UỐNG TRỊ MỤN",
                    Price = 1320000,
                    ImageUrl = "https://gaspa.vn/wp-content/uploads/2021/11/HushHush-Skin-Capsule-Clear.jpg",
                    UrlSlug = "vien-uong-tri-mun",
                    Description = "VIÊN UỐNG TRỊ MỤN HUSH&HUSH SKIN CAPSULE CLEAR+",
                    Buyed = 23,
                    Meta = "VIÊN UỐNG TRỊ MỤN HUSH&HUSH /240 viên",
                    Status = true
                },
                new()
                {
                    Name = "VIÊN UỐNG DƯỠNG DA ĐẦU, MỌC TÓC",
                    Price = 2850000,
                    ImageUrl = "https://gaspa.vn/wp-content/uploads/2021/11/18-600x549.jpg",
                    UrlSlug = "vien-uong-duong-da-dau-moc-toc",
                    Description = "Tăng cường sức khỏe cho làn da, mái tóc chiến đấu với lão hóa.",
                    Buyed = 23,
                    Meta = "VIÊN UỐNG  DƯỠNG DA ĐẦU, MỌC TÓC HUSH&HUSH",
                    Status = true
                },
                new()
                {
                    Name = "Eucerin – Gel Rửa Mặt Pro-Acne",
                    Price = 370000,
                    ImageUrl = "https://gaspa.vn/wp-content/uploads/2019/05/SRM-Eucerin-1-1-e1544607859868.jpg",
                    UrlSlug = "eucerin-gel-rua-mat-pro-acne",
                    Description = "Gel Rửa Mặt Eucerin Pro-Acne Cleansing Gel Dành Cho Da Mụn",
                    Buyed = 23,
                    Meta = "Gel Rửa Mặt Eucerin Pro-Acne Cleansing Gel",
                    Status = true
                },
                new()
                {
                    Name = "Serum cấp ẩm chuyên sâu The Gentinol Hyaluronic Acid Perfect (30ml)",
                    Price = 890000,
                    ImageUrl = "https://cdn.diemnhangroup.com/seoulspa/2022/09/serum-cap-am-chuyen-sau-hyaluronic-acid-perfect-thumnail.png",
                    UrlSlug = "serum-cap-am-chuyen-sau-hyaluronic-acid-perfect",
                    Description = "Sản phẩm serum cấp ẩm chuyên sâu Hyaluronic Acid Perfect là sản phẩm cấp ẩm chuyên sâu có khả năng cung cấp độ ẩm và các hoạt chất chống oxy hóa vượt trội cho da luôn tràn đầy sức sống và tươi trẻ.\r\n\r\n",
                    Buyed = 13,
                    Meta = "Sản phẩm serum cấp ẩm chuyên sâu Hyaluronic Acid Perfect",
                    Status = true
                },
            };
            _dbContext.Products.AddRange(products);
            _dbContext.SaveChanges();

            return products;
        }
        private IList<User> AddUsers()
        {
            throw new NotImplementedException();
        }

        private IList<Post> AddPosts()
        {
            throw new NotImplementedException();
        }
    }
}