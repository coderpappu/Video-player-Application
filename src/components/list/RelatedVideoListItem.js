import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideoListItem = ({video}) => {
    let {link, duration, thumbnail, title, id} = video;
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
                            <div
                                className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
                            >
                                <Link to={`/videos/${id}`}>
                                    <img
                                        src={thumbnail}
                                        className="object-cover"
                                        alt="Some video title"
                                    />
                                </Link>
                                <p
                                    className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                                >
                                    {duration}
                                </p>
                            </div>

                            <div className="flex flex-col w-full">
                                <Link to="/videos/1">
                                    <p
                                        className="text-slate-900 text-sm font-semibold"
                                    >
                                        {title}
                                    </p>
                                </Link>
                                <Link
                                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                                    to="/videos/1"
                                >
                                    Learn with Sumit
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">
                                    100K views . 23 Oct 2022
                                </p>
                            </div>
                        </div>
  )
}

export default RelatedVideoListItem