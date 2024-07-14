"use client";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CreateModal from "../handle/create.model";
import { useEffect, useState } from "react";
import UpdateModal from "../handle/update.model";
import Link from "next/link";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface IProps {
  blogs: IBlog[];
}
function Tables(props: IProps) {
  const { blogs } = props;

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  const handleDelete = (deleteId: number) => {
    if (
      window.confirm(
        `Are you sure you want to delete the item with id = ${deleteId}?`
      )
    ) {
      fetch(`http://localhost:8000/blogs/${deleteId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          toast.success(`Item with id = ${deleteId} has been deleted.`);
          mutate("http://localhost:8000/blogs");
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Blog</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link className="btn btn-primary" href={`/blogs/${item.id}`}>
                    View
                  </Link>
                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setBlog(item);
                      setShowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
}

export default Tables;
