const Message = () => {
  const message = process.env.NEXT_PUBLIC_SPECIAL_NEWS;

  return (
    <div className="w-full text-white bg-[#233a95] text-xs text-center py-[9px]">
      {message}
    </div>
  );
};

export default Message;
