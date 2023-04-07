namespace SpaCenter.WebApi.Models
{
    public class TransactionDTO
    {
        public int? Id { get; set; }
        // Trạng thái giao dịch
        public int? Active { get; set; }
        // Tên người mua hàng
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        // Địa chỉ người mua
        public string Address { get; set; }
        // Tổng tiền
        public double Amount { get; set; }
        // Lưu ý mua hàng
        public string Message { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
