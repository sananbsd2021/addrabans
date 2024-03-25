import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBooksends } from "@/app/lib/data";

const BookSendsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, booksends } = await fetchBooksends(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a booksends..." />
        <div>หนังสือส่ง</div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ทะเบียน</td>
            <td>รายละเอียด</td>
            <td>หน่วยงาน</td>
            <td>ผู้รับ</td>
            <td>ผู้จ่าย</td>
          </tr>
        </thead>
        <tbody>
          {booksends.map((booksend) => (
            <tr key={booksend.id}>
              <td>
                <div className={styles.product}>
                  {booksend.title}
                </div>
              </td>
              <td>{booksend.desc}</td>
              <td>{booksend.desc2}</td>
              <td>{booksend.desc3}</td>
              <td>{booksend.desc4}</td> 
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default BookSendsPage;
