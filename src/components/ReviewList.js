import React, { useState } from "react";
import "./ReviewList.css";
import Rating from "./Rating";
import ReviewForm from "./ReviewForm";
import useTranslate from "../hooks/useTranslate";

const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const ReviewListItem = ({ item, onDelete, onEditingId }) => {
    const t = useTranslate();

    const handleDeleteClick = () => onDelete(item.id);

    const handleEditClick = () => {
        onEditingId(item.id);
    };

    return (
        <div className="ReviewListItem">
            <img
                className="ReviewListItem-img"
                src={item.imgUrl}
                alt={item.title}
            />
            <div>
                <h1>{item.title}</h1>
                <Rating value={item.rating} />
                <p>{formatDate(item.createdAt)}</p>
                <p>{item.content}</p>
                <button onClick={handleEditClick}>{t("edit button")}</button>
                <button onClick={handleDeleteClick}>
                    {t("delete button")}
                </button>
            </div>
        </div>
    );
};

const ReviewList = ({ items, onDelete, onUpdate, onUpdateSuccess }) => {
    const [editingId, setEditingId] = useState(null);

    const handleCancel = () => setEditingId(null);

    return (
        <ul>
            {items.map((item) => {
                if (item.id === editingId) {
                    const { id, imgUrl, title, rating, content } = item;
                    const initialValues = { title, rating, content };

                    const handleSubmit = (formData) => onUpdate(id, formData);

                    const handleSubmitSuccess = (review) => {
                        onUpdateSuccess(review);
                        setEditingId();
                    };
                    return (
                        <li key={item.id}>
                            <ReviewForm
                                initialValues={initialValues}
                                initialPreview={imgUrl}
                                onCancel={handleCancel}
                                onSubmit={handleSubmit}
                                onSubmitSuccess={handleSubmitSuccess}
                            />
                        </li>
                    );
                }
                return (
                    <li key={item.id}>
                        <ReviewListItem
                            item={item}
                            onDelete={onDelete}
                            onEditingId={setEditingId}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ReviewList;
