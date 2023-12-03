function LeftGrid({ photo }) {
  return (
    <div className="flex items-center gap-10">
      <div>
        <h3>Views</h3>
        <span>{photo.views.toLocaleString()}</span>
      </div>
      <div>
        <h3>Downloads</h3>
        <span>{photo.downloads.toLocaleString()}</span>
      </div>
      <div>
        <h3>Likes</h3>
        <span>{photo.likes.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default LeftGrid;
