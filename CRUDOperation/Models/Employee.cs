namespace CRUDOperation.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public long Sallary { get; set; }
        public string Department { get; set; }
        public bool IsDeleted { get; set; }

        public Guid CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public Guid ModifiedBy { get; set; }

        public DateTime ModifiedDate { get; set; }
    }
}
