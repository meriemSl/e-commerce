<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\Session;

class CartApiController extends AbstractController
{
    /**
     * @Route("/cart", name="cart_api"  , methods={"GET"})
     */
    public function index(SessionInterface $session , ProductRepository $productRepository)
    {
        $panier = $session->get('panier' , []);
        $panierWithData = [] ;

        foreach($panier as $id => $quantity)
        {
            $panierWithData[] = [
                'product' => $productRepository->find($id),
                'quantity' => $quantity
            ];

            
        }
        dd($panierWithData);
       $total = 0 ; 

       foreach($panierWithData as $item )
       {
           $totalItem = $item['product'] -> getPrice() * $item['quantity'] ;
           $total += $totalItem ; 
       }
     return $panierWithData ;
    }

    /**
     * @Route("/cart/api1/{id}", name="cart_api_index" )
     */
    public function add($id , SessionInterface $session)
    { 
     
      $panier = $session->get('panier',[]);
      
      if(!empty($panier[$id]))
       {
           $panier[$id] ++ ;
       } else 
           {$panier[$id] = 1;}





      $session -> set('panier' , $panier);
      dd($session->get('panier'));
    }

    
    /**
     * @Route("/cart/remove/{id}" )
     */
    public function remove($id , SessionInterface $session)
    { 
        $panier = $session->get('panier',[]);
        if(!empty($panier[$id]))
        {
           unset(  $panier[$id] );
        } 
        
        $session->set('panier' , $panier) ;

        return  $this->redirectToRoute('cart_index');
 
       
     
    }
}
