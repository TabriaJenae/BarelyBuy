PGDMP      %        
    	    {           onlineshopping    16.0    16.0                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    16398    onlineshopping    DATABASE     �   CREATE DATABASE onlineshopping WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE onlineshopping;
                postgres    false            �            1259    16413 
   categories    TABLE     f   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    16412    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    218                       0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    217            �            1259    16429    orders    TABLE     )  CREATE TABLE public.orders (
    id integer NOT NULL,
    userid integer NOT NULL,
    productid integer NOT NULL,
    quantity integer NOT NULL,
    totalprice numeric(10,2) NOT NULL,
    status character varying(255) NOT NULL,
    createdat timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16428    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    222                       0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    221            �            1259    16420    products    TABLE     �   CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    image character varying(255),
    categoryid integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16419    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    220                       0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    219            �            1259    16403    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    password character varying(255),
    role character varying(255),
    createdat timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16402    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            b           2604    16416    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            d           2604    16432 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            c           2604    16423    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            `           2604    16406    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216                       0    16413 
   categories 
   TABLE DATA           .   COPY public.categories (id, name) FROM stdin;
    public          postgres    false    218   �!                 0    16429    orders 
   TABLE DATA           `   COPY public.orders (id, userid, productid, quantity, totalprice, status, createdat) FROM stdin;
    public          postgres    false    222   �"                 0    16420    products 
   TABLE DATA           S   COPY public.products (id, name, description, price, image, categoryid) FROM stdin;
    public          postgres    false    220   #       �          0    16403    users 
   TABLE DATA           K   COPY public.users (id, name, email, password, role, createdat) FROM stdin;
    public          postgres    false    216   �(                  0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 20, true);
          public          postgres    false    217                       0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 15, true);
          public          postgres    false    221                       0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 24, true);
          public          postgres    false    219                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 5, true);
          public          postgres    false    215            i           2606    16418    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    218            m           2606    16435    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    222            k           2606    16427    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    220            g           2606    16411    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216                  x�M�;o�0�g�Wx�XDygl�<� �tQe�*�%�������ȏw����#��5ǰqk�+���*�WMM��&�b�љ$�׮�h!����+�.-KYpJ�d��8�v��읜�.a�?�{rpO)r��v�j�$�Ɣs���&'=�1\������jg��%����>�wv�����i�;j�GT3���p�����]���<e�1kP-ag��5����!�Y�^KI��?��*�#��[�*]~<"�/�jL            x������ � �         �  x�]V�n�8}�����ee��-���t:�ݸę��AQ�ŉ$jHɉ������� ��*���)sv����co�vt0݅�z�N�����Ō4ԊԧԃjU7���5g�����h�;:�.��j�Q%=ܾ.�q�j�צ��ZoB��m����۲K���<	v.���'s��Eۊ���v��\�ٟ�Rv�MO{a�i�|�;1~ғ��ҿq��3����IW�XZэ���h��H�Q4�5��ޚr�C��*��h��D2��5UcS�	*L�.���`Z+��n�Ґ�H�l�'*+ӤP���J�Q*��ʄ�Bzi��/��hMG�w�A2/��;{�«cϣ%鵴�r��C��
9�֘Q�N��C�jz�:���U�1P��`u1F|���J�4��;����9d�$�n�ˌ���&�)/֊�m�%!�,Z��-}7��*:Ԣ�awϯ�{z����+�������	��hݨNU9���I�cw��������8zU ߇��k�.Q���wn�&d �1K���p��Ň*z��V��2�H�ݑp�d)�}��$a7
��jy��}���@��>��"X��MVQΐy�. 1���=�r����2*�e������j��Y��6�r�%�6E(j��S�{�����+�6�u������vwjB9*7{!7�}3��4��]�I{�s��R{( �)�pK�$�՝!!u	 ��z%!y�*e�F������o��ȓt��S5�ц��n���<��Q\�I�5b�F��K�׭��G������D'D��$F�s
���ڿz�����i$-Š�`t�u:�Q�M�5��d�'��']�SC���)�M�e{S蹁�z����S����k�<���4I��8�Ga��̤�$�?A�R
��0�\|��	*����T]>�I��ώ|{̲#>�$��)b�D��{� ��ks	&�֧)� 5u��%�f<ղTI���P�i&�l�G<eo�21��uSZ��xi�-_e���Ε�!@�w��ح���3�d���#��ؙlj�<��)�x2�E|�^`��=6��ꣴ��,�4}��+|�'���b�x�ݬ�<Y_+����}������N M@��{�3�8�����R^U�1T�s:E��x���&~Q]��b�l$02Ni:�@�/�+��t��F���O5ݪ��������ks}x�o��f�\��#4���$:X�G>�<�����촤�Q��<�w_�J�is�#Ȍ@����9�XH�@g���v�#�a���ۢP���|2!�Fu'4g�3�����06a�L���>�|ul���nq��i��O���ح�Ɗ�'��qo>0o%5A>���@���-ք�O�`�v^��/oa��@���O�Ϡ�Fi�^A�����&VH�h|�,r�h�c;6�����Am۰�&xuX�~����Us�ͫ��A�wE�� $l5      �   K   x�3�tL����,.)J,�/�L��s3s���s9��ML!��FFƺ�@�```e`aeh�gia	�s��qqq ��U     