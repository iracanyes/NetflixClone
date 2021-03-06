import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  PosterList
} from "../components";
import { IGetMoviesByCategory } from "../types/interfaces";
import {customListCategoryMovies} from "../graphql/custom-queries";
import {View} from "react-native";

const GetMoviesByCategory = (props: IGetMoviesByCategory) => {
  const { category } = props;
  const [ moviesByCategory, setMoviesByCategory ] = useState([]);

  // Get All movies from a category
  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      try{
        if(category === undefined) return;
        // @ ts-ignore
        const res = await API.graphql(graphqlOperation(
          customListCategoryMovies,
          {
            filter: {
              categoryID: { contains: category.id}
            }
          }
        ));
        // @ts-ignore
        //console.log('GetMoviesByCategory useEffect res', res.data)
        // @ts-ignore
        if(res.data.listMovieCategories){
          // @ts-ignore
          //console.log('GetMoviesByCategory useEffect res', res.data.listMovieCategories)
          // @ts-ignore
          setMoviesByCategory(res.data.listMovieCategories.items);
        }
      }catch (e) {
        console.warn('GetMoviesByCategory useEffect res error', e);
      }
      
    };

    fetchMoviesByCategory();
  }, []);

  return (
    <View>
      { category && moviesByCategory.length > 0 && (<PosterList medias={moviesByCategory} category={category}/>)}
    </View>
  );
};

export default GetMoviesByCategory;